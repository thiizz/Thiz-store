import { Container, ContainerImg, Price, Title } from './styleItem'
import Image from "next/image";
import { useRouter } from "next/router";
import { rgbDataURL } from '../../../../utils/blurImage'


export default function Items({ item }) {
	const { push } = useRouter()
	const handleViewProduct = () => {
		push(`/produto/${item?.slug}`)
	}
	return (
		<Container>
			<ContainerImg onClick={handleViewProduct}>
				<Image
					src={item?.image.url}
					alt={item?.title}
					fill
					sizes='100%'
					blurDataURL={rgbDataURL(255, 255, 255)}
					placeholder="blur"
				/>
			</ContainerImg>
			<Title onClick={handleViewProduct}>{item.title}</Title>
			<Price>R${item.price.toFixed(2).toString().replace(".", ",")}</Price>
		</Container>
	)
}