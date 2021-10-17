export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    voteUp(): boolean {
        this.votes += 1;
        return false;
    }
    voteDown(): boolean {
    this.votes -= 1;
    return false;
    }

    // domain() is a utility function that extracts the domain from a URL
    domain(): string {
        try {
            // e.g. http://foo.bar/path/to/bar
            const domainandPath = this.link.split('//')[1];
            return domainandPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
