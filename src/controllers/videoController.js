const fakeUser = {
	username: "Wook",
	loggedIn: false,
};

export const trending = (req, res) => {
	const videos = [
		{
			title: "First Video",
			rating: 5,
			comments: 2,
			createdAt: "2 mins ago",
			views: 59,
			id: 1,
		},
		{
			title: "Second Video",
			rating: 5,
			comments: 2,
			createdAt: "2 mins ago",
			views: 59,
			id: 1,
		},
		{
			title: "Third Video",
			rating: 5,
			comments: 2,
			createdAt: "2 mins ago",
			views: 59,
			id: 1,
		},
	];
	return res.render("home", { pageTitle: "Home", videos: videos });
};
export const view = (req, res) => res.render("view");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
