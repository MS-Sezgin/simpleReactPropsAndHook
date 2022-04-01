import React from 'react';

function ResidentsList(props) {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{props.item[0].map((a, i) => {
					return <div key={i}>
						<li className="slide-up-fade-in">
						{a}
						</li>
					</div>
				})}

			</ul>
		</div>
	);
}

export default ResidentsList;
