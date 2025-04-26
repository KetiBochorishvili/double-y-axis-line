// URL of the CSV data
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTI0H6ntWoOQ0nhggsZwQgWs2l6qYJSdlyOxm3f1rl7LXyGl7KedTIBZ9X2y4gpKv71H-ju25Mi6Ymi/pub?gid=0&single=true&output=csv';

// Function to fetch and process the CSV data
async function fetchData() {
    try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        // Parse CSV data
        const rows = csvText.trim().split('\n');
        const headers = rows[0].split(',');

        const data = rows.slice(1).map(row => {
            const values = row.split(',');
            return {
                session: +values[0],
                verbalPrompting: +values[1],
                wordResponse: +values[2],
                intervention: +values[3]
            };
        });

        return data;
    } catch (error) {
        console.error('Error fetching or processing data:', error);
        return [];
    }
} 