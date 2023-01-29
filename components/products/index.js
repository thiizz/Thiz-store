import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductsGridProvider from "../../contexts/productsGridContext";
import { getAllProducts } from "../../lib/getProducts";
import Filters from './filters/Filters'
import ProductMap from "./ProductMap";
import {
	Container,
	ProductsTitle,
	PaginationButton,
	ProductsNull
} from './styles/styleIndex'

export default function Products({ products, setProducts, title, info }) {
	const [pageInfo, setPageInfo] = useState(info)
	const [loading, setLoading] = useState(false)
	const { query } = useRouter()
	const limit = 2
	const search = query.term
	const sort = query.sortBy
	const handlePagination = () => {
		setLoading(true)
		const skip = products?.length
		getAllProducts(search, limit, sort, skip).then((response) => {
			setProducts(prev => [...prev, ...response.products])
			setPageInfo(response.pageInfo)
			setLoading(false)
			return
		}).catch(err => {
			console.log(err)
			return
		})
	}

	useEffect(() => {
		getAllProducts(search, limit, sort).then((response) => {
			setProducts(response?.products)
			setPageInfo(response.pageInfo)
			return
		}).catch(err => {
			console.log(err)
			return
		})

	}, [search]);

	return (
		<Container>
			<ProductsTitle>{title}</ProductsTitle>
			<ProductsGridProvider>
				<Filters products={products} setProducts={setProducts} setPageInfo={setPageInfo} />
				<ProductMap products={products} />
			</ProductsGridProvider>
			{pageInfo.hasNextPage ?
				<PaginationButton className={loading ? 'btnLoading' : ''} onClick={handlePagination} disabled={loading}>
					<span className="btnText">VER MAIS</span>
				</PaginationButton>
				:
				<ProductsNull>Não existem mais produtos</ProductsNull>
			}
		</Container >
	)
}