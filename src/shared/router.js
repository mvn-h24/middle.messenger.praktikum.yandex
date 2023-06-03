export class Router {
    constructor({routes}) {
        if(typeof routes !== 'object'){
            throw new Error('Routes not found')
        }
        this.routeMap = new Map(Object.entries(routes));
    }
    matchRoute(){
        const routeName= document.location.pathname;
        const route = this.routeMap.get(routeName);
        if(typeof route !== 'function'){
            throw new Error('Count not matched');
        }
        this.currentRoute = route;
        return this;
    }

    get route(){
        if(typeof this.currentRoute !== 'function'){
            throw new Error('Route not matched');
        }
        return this.currentRoute;
    }

    get routeTemplate() {
        return this.route()
    }

    get currentPageTemplate(){
        return this.matchRoute().routeTemplate;
    }
}
