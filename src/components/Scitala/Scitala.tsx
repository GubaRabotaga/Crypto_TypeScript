import './Scitala.scss'
function Scitala() {
	function handleSubmit(e: any) {
		e.preventDefault()
		console.log('You clicked submit.')
	}
	return (
		<div className='RouterBreadcrumbs'>
			<h2>Введите размер Скиталы:</h2>
			<input type='text' className='scitalaInput_first' value={6} />
			<input type='text' className='scitalaInput_second ' value={4} />
			<button className='scitalaButton'>Задать</button>
			<form onSubmit={handleSubmit}>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Scitala
