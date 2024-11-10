const GenderCheckbox = () => {
	return (
		<div className='flex gap-3'>
			<div className='form-control'>
				<label className={`label gap-1 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className='checkbox border-cyan-900' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-1 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox border-cyan-900' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;