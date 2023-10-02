import PostType from 'types/prisma/Post'

export interface AccountType {
	id?: string
	username?: string
	posts?: PostType[]
	dateCreated?: Date
	dateUpdated?: Date
}

export default AccountType
