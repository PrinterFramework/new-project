import AccountType from 'types/prisma/Account'

export interface PostType {
	id?: string
	accountId?: string
	title?: string
	content?: string
	account?: AccountType
	dateCreated?: Date
	dateUpdated?: Date
}

export default PostType
