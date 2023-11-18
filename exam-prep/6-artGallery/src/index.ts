type Article = {
  articleModel: ArticleModel
  articleName: string
  quantity: number
}
type PossibleArticles = {
  [key in ArticleModel]: number
}

type ArticleModel = "picture" | "photo" | "item"
type Criteria = "article" | "guest"

const personalityTable = {
  Vip: 500,
  Middle: 250,
}
const articleTable = { picture: 200, photo: 50, item: 250 }

type Personality = "Vip" | "Middle"

type Guest = {
  guestName: string
  points: number
  purchaseArticle: number
}
class ArtGallery {
  creator: string
  possibleArticles: PossibleArticles = { picture: 200, photo: 50, item: 250 }
  listOfArticles: Article[] = []
  guests: Guest[] = []

  constructor(creator: string) {
    this.creator = creator
  }

  addArticle(
    articleModel: string,
    articleName: string,
    quantity: number
  ): string {
    const articleModelLowerCase = articleModel.toLowerCase()
    if (!this.possibleArticles.hasOwnProperty(articleModelLowerCase)) {
      return "This article model is not included in this gallery!"
    }
    articleModelLowerCase as ArticleModel

    const articleIndex: number = this.listOfArticles.findIndex(
      (article) => articleName === article.articleName
    )
    if (
      articleIndex === -1 ||
      this.listOfArticles[articleIndex].articleModel !== articleModel
    ) {
      this.listOfArticles.push({
        articleModel: articleModelLowerCase as ArticleModel,
        articleName,
        quantity,
      })
    } else {
      this.listOfArticles[articleIndex].quantity += quantity
    }

    return `Successfully added article ${articleName} with a new quanitity- ${quantity}.`
  }

  inviteGuest(guestName: string, personality: string): string {
    if (this.guests.some((guest) => guestName === guest.guestName)) {
      return `${guestName} has already been invited.`
    }
    const guestPoints: number = personalityTable[personality] ?? 50

    this.guests.push({ guestName, points: guestPoints, purchaseArticle: 0 })
    return `You have successfully invited ${guestName}!`
  }

  buyArticle(
    articleModel: string,
    articleName: string,
    guestName: string
  ): string {
    const articleIndex = this.listOfArticles.findIndex(
      (article) => article.articleName === articleName
    )
    if (
      articleIndex === -1 ||
      this.listOfArticles[articleIndex].articleModel !== articleModel
    )
      return `This article is not found.`

    if (this.listOfArticles[articleIndex].quantity === 0) {
      return `The ${articleName} is not available.`
    }
    if (!this.guests.some((guest) => guest.guestName === guestName)) {
      return "This guest is not invited"
    }
    const necessaryPoints = articleTable[articleModel]
    const currentGuestIndex: number = this.guests.findIndex(
      (guest) => guest.guestName === guestName
    )
    if (this.guests[currentGuestIndex].points < necessaryPoints) {
      return "You need more points to purchase the article"
    }

    this.guests[currentGuestIndex].points -= necessaryPoints
    this.guests[currentGuestIndex].purchaseArticle += 1
    this.listOfArticles[articleIndex].quantity -= 1
    return `${guestName} successfully purchased the article worth ${necessaryPoints} points.`
  }

  showGalleryInfo(criteria: Criteria): string {
    if (criteria === "article") {
      return `Articles information: \n${this.listOfArticles
        .map(
          (article) =>
            `${article.articleModel} - ${article.articleName} - ${article.quantity}`
        )
        .join("\n")}`
    }
    if (criteria === "guest") {
      return `Guests information: \n${this.guests
        .map((guest) => `${guest.guestName} - ${guest.purchaseArticle}`)
        .join("\n")}`
    }
  }
}

const artGallery = new ArtGallery("Curtis Mayfield")

artGallery.addArticle("picture", "Mona Liza", 3)

artGallery.addArticle("Item", "Ancient vase", 2)
artGallery.addArticle("picture", "Mona Liza", 1)
artGallery.inviteGuest("John", "Vip")
artGallery.inviteGuest("Peter", "Middle")
artGallery.buyArticle("picture", "Mona Liza", "John")
artGallery.buyArticle("item", "Ancient vase", "Peter")
console.log(artGallery.showGalleryInfo("article"))
console.log(artGallery.showGalleryInfo("guest"))
