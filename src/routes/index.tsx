import {
	useImgproxyLoader,
	useImgproxyPlaceholder,
} from "@lonik/oh-image/imgproxy";
import { Image as OhImage } from "@lonik/oh-image/react";
import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/env";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const imgSrc = `${env.VITE_BASE_URL}/img/sean.png`;

	const placeholderLoader = useImgproxyPlaceholder({
		transforms: { blur: 20, quality: 10 },
	});

	const loaderNoDot = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
		},
	});

	const loaderWithDot = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: ".webp",
			quality: 80,
		},
	});

	const loaderWithWatermark = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			watermark: {
				opacity: 10,
			},
		},
	});

	const loaderWithBlur = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			blur: 20,
		},
	});

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderNoDot}
					src={imgSrc}
					alt="No Dot"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>format:webp</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					src={imgSrc}
					alt="Placeholder Only"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>placeholder only</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderWithDot}
					src={imgSrc}
					alt="With Dot"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>format:.webp</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderWithWatermark}
					src={imgSrc}
					alt="With Watermark"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With{" "}
					<code>watermark.opacity + defined IMGPROXY_WATERMARK_DATA only</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderWithBlur}
					src={imgSrc}
					alt="With Blur"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>blur</code>
				</p>
			</div>
		</div>
	);
}
