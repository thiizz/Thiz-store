import Link from 'next/link'
import Image from 'next/image'
import style from './Header.module.css'
import { useState, useEffect } from 'react'
import { CartMenu } from '../../components/cart/CartMenu'
import { FaShoppingCart } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from "framer-motion"
import { useMenuCart } from '../../contexts/OpenCartMenuContext'
import { useScrollDirection } from '../../lib/useScrollDirection'
import { useSize} from '../../lib/useSize'

function Header() {

	const { isOpen, setIsOpen } = useMenuCart()
	const [isMobile, setIsMobile] = useState(false);
	const scrollDirection = useScrollDirection()

	const cartVariant = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "100%" },
	}

	const headerVariant = useSize()
	
	return (
		<>
			<motion.header className={style.header} animate={scrollDirection === "down" ? "small" : "normal"} variants={headerVariant} transition={{ ease: "easeOut", duration: 0.3 }}>
				<motion.div animate={scrollDirection === "down" ? "small_Logo" : "normal_Logo"} variants={headerVariant}>
					<Link href="/"><a><Image className={style.logo} src='/logo-maeTerra2.png' alt='logo-natureza' height='77px' width='77px'></Image></a></Link>
				</motion.div>
				<div className={style.menuBtn}>
					<ul>
						<li><Link href="/"><motion.a animate={scrollDirection === "down" ? "small_Font" : "normal_Font"} variants={headerVariant}>início</motion.a></Link></li>
						<li><Link href='/man'><motion.a animate={scrollDirection === "down" ? "small_Font" : "normal_Font"} variants={headerVariant}>masculino</motion.a></Link></li>
						<li><Link href="/woman"><motion.a animate={scrollDirection === "down" ? "small_Font" : "normal_Font"} variants={headerVariant}>feminino</motion.a></Link></li>
						<li><Link href='/about'><motion.a animate={scrollDirection === "down" ? "small_Font" : "normal_Font"} variants={headerVariant}>sobre</motion.a></Link></li>
						<li><Link href="/contact"><motion.a animate={scrollDirection === "down" ? "small_Font" : "normal_Font"} variants={headerVariant}>contato</motion.a></Link></li>
					</ul>
				</div>
				<div className={style.containerBtn}>
					<section className={style.btnInfoContainer}>
						<motion.button animate={scrollDirection === "down" ? "small_Menu" : "normal_Menu"} variants={headerVariant} className={`${style.btn} ${style.btnInfo}`} type='button'><MdHeadsetMic /></motion.button>
						<div>
							<motion.button animate={scrollDirection === "down" ? "small_Menu" : "normal_Menu"} variants={headerVariant} onClick={() => setIsOpen(isOpen => !isOpen)} className={`${style.btn} ${style.btnInfo}`} type='button'>
								<FaShoppingCart />
								<div className={`${style.countCartItems} ${scrollDirection === "down" ? style.countCartitemsSmall : style.countCartitemsNormal}`}>0</div>
							</motion.button>
						</div>
						<div className={style.btnSpace}>
							<button className={`${style.btn} ${style.btnLogin} ${scrollDirection === "down" ? style.btnLoginSmall : style.btnLoginNormal}`} type='button'>LOGIN</button>
						</div>
					</section>
				</div>
			</motion.header>
			<motion.nav
				animate={isOpen ? "open" : "closed"}
				variants={cartVariant}
				className={style.cart}
			>
				<button onClick={() => setIsOpen(isOpen => !isOpen)} className={style.closeBtn}><AiOutlineCloseCircle /><p className={style.closeText}>Fechar</p></button>
				<CartMenu />
			</motion.nav>
		</>

	)
}
export default Header