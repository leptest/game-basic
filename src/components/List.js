import React from 'react';
import { connect } from 'react-redux';

const ConnectedList = ({ articles }) => (
	<ul>
		{articles.map((el) => (
			<li key={el.id}>{el.title}</li>
		))}
	</ul>
);

const mapStateToProps = (state) => ({ articles: state.articles });

const List = connect(mapStateToProps)(ConnectedList);

export default List;
