import devfolio from '$lib/assets/Devfolio.webp?enhanced';
import filecon from '$lib/assets/filecon.webp?enhanced';
import solana from '$lib/assets/Solana.webp?enhanced';
import replit from '$lib/assets/replit.webp?enhanced';
import polygon from '$lib/assets/polygon.webp?enhanced';

const sponsers = [
	{
		name: 'Solana',
		img: solana,
		description:
			'Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today. It offers fast, secure, and scalable decentralized apps and marketplaces, ensuring composability between ecosystem projects by maintaining a single global state as the network scales.',
		link: 'https://solana.com/'
	},
	{
		name: 'Devfolio',
		img: devfolio,
		description:
			'Devfolio is a platform for developers to showcase their projects and connect with other developers. It provides a space for developers to build their portfolios, participate in hackathons, and find job opportunities, fostering a community of innovation and collaboration.',
		link: 'https://devfolio.co/'
	},
	{
		name: 'Replit',
		img: replit,
		description:
			'Replit is a simple yet powerful online IDE, Editor, Compiler, Interpreter, and REPL. It allows users to write and execute code in various programming languages directly from their browser, making it an ideal tool for learning, teaching, and rapid prototyping.',
		link: 'https://replit.com/'
	},
	{
		name: 'Polygon',
		img: polygon,
		description:
			'Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It aims to create a multi-chain ecosystem of Ethereum-compatible blockchains, providing scalability and interoperability while maintaining the security and decentralization of the Ethereum network.',
		link: 'https://polygon.technology/'
	},
	{
		name: 'Filecoin',
		img: filecon,
		description:
			"Filecoin is a decentralized storage network designed to store humanity's most important information. It allows users to rent out spare storage space and earn Filecoin tokens, creating a robust and efficient storage marketplace that leverages blockchain technology for security and reliability.",
		link: 'https://filecoin.io/'
	}
];
export default sponsers;
