import img1 from "../../../assets/img/Img 1.png";
import img2 from "../../../assets/img/Img 2.png";
import img3 from '../../../assets/img/Img 3.jpg'
import img4 from '../../../assets/img/Img 5.png'
import img5 from '../../../assets/img/Img 4.jpg'
import img6 from '../../../assets/img/Img 6.jpg'
import img7 from '../../../assets/img/Img 7.jpg'
import img8 from '../../../assets/img/Img 8.jpg' 
import { StaticImageData } from 'next/image';

interface IImages {
	id: number
	src: StaticImageData
	alt: string
}


export const images = [
	{
		id: 1,
		src: img1,
		alt: 'Картинка бижутерии'
  },
	{
		id: 2,
		src: img2,
		alt: 'Картинка бижутерии'
	},
	{
		id: 3,
		src: img3,
		alt: 'Картинка бижутерии'
	},
	{
		id: 4,
		src: img4,
		alt: 'Картинка бижутерии'
	},
	{
		id: 5,
		src: img5,
		alt: 'Картинка бижутерии'
	},
	{
		id: 6,
		src: img6,
		alt: 'Картинка бижутерии'
	},
	{
		id: 7,
		src: img7,
		alt: 'Картинка бижутерии'
	},
	{
		id: 8,
		src: img8,
		alt: 'Картинка бижутерии'
	}
] as IImages[];