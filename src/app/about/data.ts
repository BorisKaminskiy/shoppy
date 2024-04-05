import { StaticImageData } from 'next/image'
import img1 from '../../assets/img/about01.png' 
import img2 from '../../assets/img/about02.png'

export interface IAboutData {
	title: string,
	img: StaticImageData,
	paragraph1: string,
	paragraph2?: string,
	paragraph3?: string
}

export const aboutData = [
	{
		title: 'Тренды в украшениях',
		img: img1,
		paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
		paragraph2: '● consectetur adipiscing elit. Aliquam placerat',
		paragraph3: '● Lorem ipsum dolor sit amet consectetur '
	},
	{
		title: 'Сделано с любовью',
		img: img2,
		paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.',
	}
] as IAboutData []