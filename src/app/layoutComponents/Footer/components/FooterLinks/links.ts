import { TModal } from '@/ui/Modal/Modal'

interface IFooterLinks  {
	title: string
	link: TModal
}

export const footerLinks = [
	{
		title: 'Контакты',
		link: 'contacts'
	},
	{
		title: 'Условия покупки',
		link: 'purchase'
	},
	{
		title: 'Доставка и возврат',
		link: 'delivery'
	},
] as IFooterLinks[]