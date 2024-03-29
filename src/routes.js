
export const routes = {
    dashboard() {
        return '/dashboard';
    },
    playlist() {
        const dashboard = this.dashboard();
        return dashboard+'/playlist';
    },
    getRecommendations(recommend) {
        const dashboard = this.dashboard();
        return dashboard+'/search?q='+recommend;
    }

}