import { v2 as cloudinary } from 'cloudinary';

import type { Actions } from './$types';

import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET
} from '$env/static/private';

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET
});

export const actions: Actions = {
	completeProfile: async ({ request, locals: { supabase, user } }) => {
		const formData = await request.formData();

		const name = user?.user_metadata.name as string | null;
		const email = user?.user_metadata.email as string | null;
		const phone = user?.user_metadata.phone as string | null;
		const institute = formData.get('institute') as string | null;
		const course = formData.get('course') as string | null;
		const file = formData.get('collegeId') as File | null;

		let fileUrl: string | null = null;
		if (file) {
			try {
				const buffer = Buffer.from(await file.arrayBuffer());

				const result = await new Promise((resolve, reject) => {
					const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
						if (error) return reject(error);
						resolve(result);
					});

					uploadStream.end(buffer);
				});

				const uploadResult = result as { secure_url: string };
				fileUrl = uploadResult.secure_url;
			} catch (error) {
				return { error: (error as Error).message };
			}
		}

		const { error } = await supabase.from('profiles').insert({
			id: user?.id,
			name,
			email,
			phone,
			institute,
			course,
			college_id_url: fileUrl
		});

		if (error) {
			return { error: error.message };
		}

		return { success: true };
	}
};
