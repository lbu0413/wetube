import Video from "../models/Video";

export const home = async (req, res) => {
	const videos = await Video.find({});
	return res.render("home", { pageTitle: "Home", videos });
};
export const view = (req, res) => {
	const { id } = req.params;
	return res.render("view", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
	const { id } = req.params;
	return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = async (req, res) => {
	// here we will add a video to the videos array
	const { title, description, hashtags } = req.body;
	await Video.create({
		title,
		description,
		createdAt: Date.now(),
		hashtags: hashtags.split(",").map((word) => `#${word}`),
		meta: {
			views: 0,
			rating: 0,
		},
	});

	return res.redirect("/");
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("deleteVideo");
