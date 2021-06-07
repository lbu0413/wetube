import Video from "../models/Video";

export const home = async (req, res) => {
	const videos = await Video.find({});
	console.log(videos);
	return res.render("home", { pageTitle: "Home", videos: [] });
};
export const view = (req, res) => {
	const { id } = req.params;
	return res.render("view", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
	const { id } = req.params;
	return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	videos[id - 1].title = title;
	return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = (req, res) => {
	// here we will add a video to the videos array
	const { title } = req.body;
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("deleteVideo");
