import imageTeamMembersDesktop from "../../assets/images/about/desktop/image-team-members.jpg";
import imageTeamMembersTablet from "../../assets/images/about/tablet/image-team-members.jpg";
import imageTeamMembersMobile from "../../assets/images/about/mobile/image-team-members.jpg";

const data = [
  {
    id: 1,
    title: "The Culture",
    body: "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
  },
  {
    id: 2,
    title: "The People",
    body: "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
  },
];
const teamBranchData = [
  {
    id: 1,
    title: "Team Members",
    number: "300+",
  },
  {
    id: 2,
    title: "Offices in the US",
    number: "3",
  },
  {
    id: 3,
    title: "Transactions analyzed",
    number: "10M+",
  },
];
export default function Company() {
  return (
    <div>
      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet={imageTeamMembersMobile} />
          <source media="(max-width: 992px)" srcSet={imageTeamMembersTablet} />
          <img src={imageTeamMembersDesktop} alt="image team members" />
        </picture>
      </div>
      <div>
        {teamBranchData.map(({ id, title, number }) => (
          <div key={id}>
            <h3>{title}</h3>
            <span>{number}</span>
          </div>
        ))}
      </div>
      <div>
        {data.map(({ id, title, body }) => (
          <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
