import img1 from "../../../assets/img/Img 1.png";
import img2 from "../../../assets/img/Img 2.png";
import img3 from '../../../assets/img/11zon.jpg'
import img4 from '../../../assets/img/1645001612_79-glamours-name-p-sergi-dlya-nevesti-krasivo-foto-79.png'
import img5 from '../../../assets/img/56c3928317c14_Busi,-Podveski,-Kole.jpg'
import img6 from '../../../assets/img/maxresdefault.jpg'
import img7 from '../../../assets/img/ukrasenia-devuska-vzglad-makiaz-pomada-resnicy-kole-manikur-serezki.jpg'
import { StaticImageData } from 'next/image';

interface IImages {
	src: StaticImageData
	alt: string
}


export const images = [
  {
		src: img1,
		alt: 'Картинка бижутерии'
  },
  {
		src: img2,
		alt: 'Картинка бижутерии'
	},
	{
		src: img3,
		alt: 'Картинка бижутерии'
	},
	{
		src: img4,
		alt: 'Картинка бижутерии'
	},
	{
		src: img5,
		alt: 'Картинка бижутерии'
	},
	{
		src: img6,
		alt: 'Картинка бижутерии'
	},
	{
		src: img7,
		alt: 'Картинка бижутерии'
  },
] as IImages[];