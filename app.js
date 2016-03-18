
/****************** Globals ******************/

var Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	IndexLink = ReactRouter.IndexLink,
	Link = ReactRouter.Link,
	hashHistory = ReactRouter.hashHistory;

/****************** My components ******************/

var Router = Link = ReactRouter.Link;

var Wrapper = function(props){
	return <div>
		<h4>A Router demo</h4>
		<ul class="nav">
			<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
			<li><Link to="/products" activeClassName="active">Products</Link></li>
		</ul>
		<hr/>
		<div class="content">
			{props.children}
		</div>
	</div>;
};

var Home = function(){
	return <div>
		<p>Hello! This is a tiny demo of React Router.</p>
	</div>;
};

var ProductList = function(){
	return <div>
		<p>Here's what we currently have in stock:</p>
		<ul>
			<li><Link to="/products/lawnmower">Lawnmower</Link></li>
			<li><Link to="/products/lampshade">Lampshade</Link></li>
		</ul>
	</div>;
};

var Product = function(props){
	return <div>
		<p>So, interested in buying a {props.params.productid}, are you?</p>
	</div>;
};


/****************** Route map ******************/

var Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute;

var routes = (
	<Route path="/" component={Wrapper}>
		<IndexRoute component={Home} />
		<Route path="/products">
			<IndexRoute component={ProductList} />
			<Route path="/products/:productid" component={Product} />
		</Route>
	</Route>
);



/****************** Kicking it off ******************/

var Router = ReactRouter.Router,
	hashHistory = ReactRouter.hashHistory;

ReactDOM.render(
	<Router routes={routes} history={hashHistory} />,
	document.getElementById("container")
);