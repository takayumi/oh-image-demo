import { Image as OhImage, useImgproxyLoader } from "@lonik/oh-image/react";
import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/env";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const loaderNoDot = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		placeholder: true,
		params: {
			quality: "80",
		},
	});

	const loaderWithDot = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		placeholder: true,
		format: ".webp",
		params: {
			quality: "80",
		},
	});

	const loaderFNoDot = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		placeholder: true,
		params: {
			quality: "80",
			f: "webp",
		},
	});

	const loaderFWithDot = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		placeholder: true,
		params: {
			quality: "80",
			f: ".webp",
		},
	});

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
			<div className="p-4">
				<OhImage
					loader={loaderNoDot}
					src="/img/sean.png"
					alt="No Dot"
					width={64}
					height={64}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>format:webp</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					loader={loaderWithDot}
					src="/img/sean.png"
					alt="With Dot"
					width={64}
					height={64}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>format:.webp</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					loader={loaderFNoDot}
					src="/img/sean.png"
					alt="With Dot"
					width={64}
					height={64}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>f:webp</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					loader={loaderFWithDot}
					src="/img/sean.png"
					alt="With Dot"
					width={64}
					height={64}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>f:.webp</code>
				</p>
			</div>
		</div>
	);
}
