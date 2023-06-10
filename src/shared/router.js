import {useSlot} from "@/shared/useSlot.js";

export class Router {
    constructor({routes}) {
        if(typeof routes !== 'object'){
            throw new Error('Routes not found')
        }
        this.routeMap = new Map(Object.entries(routes));
    }
    matchRoute(){
        const routeName= document.location.pathname;
        this.currentRoute = this.routeMap.get(routeName);
        return this;
    }

    get route(){
        return this.currentRoute;
    }

    get routeTemplate() {
        return useSlot(this.route)
    }

    get currentPageTemplate(){
        return this.matchRoute().routeTemplate;

    }
}
