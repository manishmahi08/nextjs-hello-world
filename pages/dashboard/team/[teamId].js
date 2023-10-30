import { useRouter } from 'next/router';

function Team() {
    const router = useRouter();
    const { teamId } = router.query;

    // Replace this with your data-fetching logic, e.g., fetching the post by teamId.
    const team = {
        id: teamId,
        title: 'Member Title',
        content: `This is the content of the Member ${teamId}.`,
    };

    if (!teamId) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Member {team.id}</h1>
            <h2>{team.title}</h2>
            <p>{team.content}</p>
        </div>
    );
}

export default Team;
