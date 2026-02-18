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
				opacity: 0.2,
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

	const loaderFill = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "fill",
		},
	});

	const loaderFit = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "fit",
		},
	});

	const loaderForce = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "force",
		},
	});

	const loaderCropNorth = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			crop: {
				width: 200,
				height: 200,
				gravity: "no",
			},
		},
	});

	const loaderCropCenter = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			crop: {
				width: 200,
				height: 200,
				gravity: "ce",
			},
		},
	});

	const loaderSharpen = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			sharpen: 2,
		},
	});

	const loaderPixelate = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			pixelate: 10,
		},
	});

	const loaderRotate90 = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			rotate: 90,
		},
	});

	const loaderRotate180 = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			rotate: 180,
		},
	});

	const loaderBackground = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "fit",
			background: { r: 30, g: 144, b: 255 },
		},
	});

	const loaderBackgroundHex = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "fit",
			background: "FF5733",
		},
	});

	const loaderBrightness = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			brightness: 30,
		},
	});

	const loaderContrast = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			contrast: 1.5,
		},
	});

	const loaderSaturation = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			saturation: 0.2,
		},
	});

	const loaderAdjust = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			adjust: {
				brightness: 15,
				contrast: 1.2,
				saturation: 1.4,
			},
		},
	});

	const loaderPadding = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			padding: { top: 20, right: 20, bottom: 20, left: 20 },
			background: { r: 255, g: 255, b: 255 },
		},
	});

	const loaderExtend = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			extend: { extend: true, gravity: "so" },
			background: { r: 0, g: 0, b: 0 },
		},
	});

	const loaderGravitySouth = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "fill",
			gravity: { type: "so" },
		},
	});

	const loaderGravityNorthEast = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_type: "fill",
			gravity: { type: "noea" },
		},
	});

	const loaderDpr2 = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			dpr: 2,
		},
	});

	const loaderStripMetadata = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			strip_metadata: true,
		},
	});

	const loaderStripColorProfile = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			strip_color_profile: true,
		},
	});

	const loaderAutoRotate = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			auto_rotate: true,
		},
	});

	const loaderZoom = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			zoom: 1.5,
		},
	});

	const loaderZoomXY = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			zoom: { x: 2, y: 1 },
		},
	});

	const loaderEnlarge = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			enlarge: true,
		},
	});

	const loaderTrim = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			trim: {
				threshold: 10,
				equal_hor: true,
				equal_ver: true,
			},
		},
	});

	const loaderJpegProgressive = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "jpg",
			quality: 80,
			jpeg_options: {
				progressive: true,
				no_subsample: true,
			},
		},
	});

	const loaderPngQuantize = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "png",
			quality: 80,
			png_options: {
				quantize: true,
				quantization_colors: 128,
			},
		},
	});

	const loaderMaxBytes = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			max_bytes: 50000,
		},
	});

	const loaderResizingAlgorithmNearest = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_algorithm: "nearest",
		},
	});

	const loaderResizingAlgorithmLanczos2 = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			resizing_algorithm: "lanczos2",
		},
	});

	const loaderPreset = useImgproxyLoader({
		path: env.VITE_IMGPROXY_URL,
		transforms: {
			format: "webp",
			quality: 80,
			preset: ["thumbnail"],
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

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderFill}
					src={imgSrc}
					alt="Resizing type fill"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:fill</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderFit}
					src={imgSrc}
					alt="Resizing type fit"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:fit</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderForce}
					src={imgSrc}
					alt="Resizing type force"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:force</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderCropNorth}
					src={imgSrc}
					alt="Crop north"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>crop 200x200 gravity:no</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderCropCenter}
					src={imgSrc}
					alt="Crop center"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>crop 200x200 gravity:ce</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderSharpen}
					src={imgSrc}
					alt="Sharpen"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>sharpen:2</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderPixelate}
					src={imgSrc}
					alt="Pixelate"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>pixelate:10</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderRotate90}
					src={imgSrc}
					alt="Rotate 90"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>rotate:90</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderRotate180}
					src={imgSrc}
					alt="Rotate 180"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>rotate:180</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderBackground}
					src={imgSrc}
					alt="Background RGB"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:fit + background rgb(30,144,255)</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderBackgroundHex}
					src={imgSrc}
					alt="Background hex"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:fit + background:#FF5733</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderBrightness}
					src={imgSrc}
					alt="Brightness"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>brightness:30</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderContrast}
					src={imgSrc}
					alt="Contrast"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>contrast:1.5</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderSaturation}
					src={imgSrc}
					alt="Saturation"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>saturation:0.2</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderAdjust}
					src={imgSrc}
					alt="Adjust"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>adjust brightness:15 contrast:1.2 saturation:1.4</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderPadding}
					src={imgSrc}
					alt="Padding"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>padding:20 + background:white</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderExtend}
					src={imgSrc}
					alt="Extend south"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>extend gravity:so + background:black</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderGravitySouth}
					src={imgSrc}
					alt="Gravity south"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:fill + gravity:so</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderGravityNorthEast}
					src={imgSrc}
					alt="Gravity north-east"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_type:fill + gravity:noea</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderDpr2}
					src={imgSrc}
					alt="DPR 2x"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>dpr:2</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderStripMetadata}
					src={imgSrc}
					alt="Strip metadata"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>strip_metadata:true</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderStripColorProfile}
					src={imgSrc}
					alt="Strip color profile"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>strip_color_profile:true</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderAutoRotate}
					src={imgSrc}
					alt="Auto rotate EXIF"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>auto_rotate:true</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderZoom}
					src={imgSrc}
					alt="Zoom 1.5x"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>zoom:1.5</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderZoomXY}
					src={imgSrc}
					alt="Zoom x:2 y:1"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>zoom x:2 y:1</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderEnlarge}
					src={imgSrc}
					alt="Enlarge"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>enlarge:true</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderTrim}
					src={imgSrc}
					alt="Trim whitespace"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>trim threshold:10 equal_hor equal_ver</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderJpegProgressive}
					src={imgSrc}
					alt="JPEG progressive"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>format:jpg + jpeg_options progressive no_subsample</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderPngQuantize}
					src={imgSrc}
					alt="PNG quantize"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>format:png + png_options quantize:128</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderMaxBytes}
					src={imgSrc}
					alt="Max bytes 50kb"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>max_bytes:50000</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderResizingAlgorithmNearest}
					src={imgSrc}
					alt="Resizing algorithm nearest"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_algorithm:nearest</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderResizingAlgorithmLanczos2}
					src={imgSrc}
					alt="Resizing algorithm lanczos2"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>resizing_algorithm:lanczos2</code>
				</p>
			</div>

			<div className="p-4">
				<OhImage
					placeholder={placeholderLoader}
					loader={loaderPreset}
					src={imgSrc}
					alt="Preset thumbnail"
					width={256}
					height={256}
					className="w-16 h-16"
				/>
				<p className="text-white">
					With <code>preset:thumbnail</code>
				</p>
			</div>
		</div>
	);
}
