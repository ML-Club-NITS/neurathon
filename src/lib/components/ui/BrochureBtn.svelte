<button
	class="group relative z-0 flex transform-gpu cursor-pointer items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-full border border-white/10 bg-orange-600 px-6 py-2 text-white
		transition-transform duration-300 ease-in-out active:translate-y-[0px] dark:text-white"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0,0,256,256"
		width="32px"
		height="32px"
		fill-rule="nonzero"
		><g
			fill="#ffffff"
			fill-rule="nonzero"
			stroke="none"
			stroke-width="2"
			stroke-linecap="butt"
			stroke-linejoin="miter"
			stroke-miterlimit="10"
			stroke-dasharray=""
			stroke-dashoffset="0"
			font-family="none"
			font-weight="none"
			font-size="none"
			text-anchor="none"
			style="mix-blend-mode: normal"
			><g transform="scale(8,8)"
				><path
					d="M15,4v16.5625l-5.28125,-5.28125l-1.4375,1.4375l7,7l0.71875,0.6875l0.71875,-0.6875l7,-7l-1.4375,-1.4375l-5.28125,5.28125v-16.5625zM7,26v2h18v-2z"
				></path></g
			></g
		></svg
	>
	<slot></slot>
</button>
