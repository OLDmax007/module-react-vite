export interface CommentDMJSModel {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: UserDMJSModel;
}
export interface UserDMJSModel {
	id: number;
	username: string;
	fullName: string;
}