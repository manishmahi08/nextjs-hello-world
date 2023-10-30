import React from 'react';
import Link from 'next/link';

function TeamList() {
    const team = [
        { teamId: 1, title: 'Member 1' },
        { teamId: 2, title: 'Member 2' },
        { teamId: 3, title: 'Member 3' },
    ];

    return (
        <div><h1>Hello, Next.js! It's a team page.</h1>
            <ul>
                {team.map((member) => (
                    <li key={member.teamId}>
                        <Link href="/dashboard/team/[teamId]" as={`/dashboard/team/${member.teamId}`}>
                            {member.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamList;
