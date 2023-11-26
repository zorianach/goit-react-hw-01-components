import css from './Container.module.css'

const Container = ({ children }) => {
	return (
		<div className={css.container}>
			{/* <h1>Container</h1> */}
			{children}
		</div>
	)
}

export default Container