import './Scitala.scss'
function Scitala() {
	return (
		<div className='RouterBreadcrumbs'>
			<h2>Введите размер Скиталы:</h2>
			<input type='text' className='scitalaInput_first' value={6} />
			<input type='text' className='scitalaInput_second ' value={4} />
			<button className='scitalaButton'>Задать</button>
			<button className='scitalaButton'>Поменять метод шифровки</button>
		</div>
	)
}

export default Scitala
