import { Container, ContainerItems, ContainerViewMore, ViewMore } from './styleSearchModal'
import Items from '../Items';
import HeaderSearchModal from './HeaderSearchModal';
import { useRouter } from 'next/router';

export default function SearchModal({ data, searching, setItems, setIsOpen, find, scrolldirection }) {
	const quantity = data?.map(product => product)
	const { push } = useRouter()

	const viewAllResults = () => {
		push(`/busca/?term=${find}`)
	}
	const handleClose = () => {
		setIsOpen(false)
		setItems([])
	}
	return (
		<Container
			initial={{ height: "0" }}
			animate={{ height: "auto" }}
			transition={{ delay: .2, duration: .5 }}
			scrolldirection={scrolldirection}
		>
			<HeaderSearchModal searching={searching} find={find} quantity={quantity} handleClose={handleClose} />

			{
				data?.length !== 0 &&
				<>
					{quantity?.length === 0 &&
						<ContainerViewMore>
							<div className='notFound'>Produto não encontrado.</div>
						</ContainerViewMore>
					}
					<ContainerItems>
						{data?.map((item, index) => {
							if (index < 6) {
								return (
									<Items key={item.id} item={item} />
								)
							}
						})}
					</ContainerItems>
					{quantity?.length > 6 &&
						<ContainerViewMore>
							<ViewMore onClick={viewAllResults}>Ver todos resultados</ViewMore>
						</ContainerViewMore>
					}
				</>
			}
		</Container >
	)


}