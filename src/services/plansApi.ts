interface PlanProps {
    name: string,
    limit: number;
}
interface PlansProps extends Array<PlanProps>{}

const plans: PlansProps = [
    { name: 'faleMais30', limit: 30 },
    { name: 'faleMais60', limit: 60 },
    { name: 'faleMais120', limit: 120 },
];

export default plans;
