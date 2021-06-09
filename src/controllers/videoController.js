import Video from "../models/Video";

export const home = async (req, res) => {
	const videos = await Video.find({});
	return res.render("home", { pageTitle: "Home", videos });
};
export const view = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	if (video === null) {
		return res.render("404", { pageTitle: "Video could not be found" });
	}
	return res.render("view", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};

export const postEdit = async (req, res) => {
	const { id } = req.params;
	const { title, description, hashtags } = req.body;
	const video = await Video.exists({ _id: id });
	if (video === null) {
		return res.render("404", { pageTitle: "Video could not be found" });
	}
	await Video.findByIdAndUpdate(id, {
		title,
		description,
		hashtags: hashtags
			.split(",")
			.map((word) => (word.startsWith("#") ? word : `#${word}`)),
	});

	return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = async (req, res) => {
	// here we will add a video to the videos array
	const { title, description, hashtags } = req.body;
	try {
		await Video.create({
			title,
			description,
			createdAt: Date.now(),
			hashtags: hashtags.split(",").map((word) => `#${word}`),
		});

		return res.redirect("/");
	} catch (err) {
		console.log(err);
		return res.render("upload", {
			pageTitle: "Upload video",
			errorMessage: err._message,
		});
	}
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("deleteVideo");
