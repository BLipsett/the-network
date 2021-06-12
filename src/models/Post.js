export default class Post {
  constructor(data) {
    this.body = data.body
    this.id = data.id
    this.img = data.imgUrl
    this.creator = data.creator.name
    this.creatorId = data.creator.id
    this.creatorEmail = data.creator.email
    this.creatorPicture = data.creator.picture
    this.likes = data.likes
  }
}
