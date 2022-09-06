import ProductsItems from './productItems';
import style from '../../styles/Products.module.css'


function ProductView({ products }) {
	return (

		<div className={`${style.content}`} id='produtos'>
			<section className={style.container} >
				{products?.map((stock) => {
					return (
						<ProductsItems key={stock.id} stock={stock} />
					);
				})}
			</section>
		</div>

	)
}
export const Product = ProductView