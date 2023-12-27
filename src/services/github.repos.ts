const repo_url = 'https://api.github.com/users/afnan-shakeel/repos';

async function getRepos(url: string = repo_url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.json();
        const stringsToRemove = ['mess-sheet-firebaseX', 'xsample-web-tw', 'xsample-web', 'asx']; 
        const filteredData = data.filter((item: any) => !stringsToRemove.includes(item.name));
        return filteredData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { getRepos };