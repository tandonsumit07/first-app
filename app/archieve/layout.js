export default function ArchieveLayout({archieve, latest}){
    return (
        <div>
            <h1>News Archieve</h1>
            <section id="archieve-filter">{archieve}</section>
            <section id="archieve-latest">{latest}</section>
        </div>
    );
}