import iconPersonalFinances from "../assets/images/home/desktop/icon-personal-finances.svg";
import iconBankingAndCoverage from "../assets/images/home/desktop/icon-banking-and-coverage.svg";
import iconConsumerPayments from "../assets/images/home/desktop/icon-consumer-payments.svg";

export const benefits = [
  {
    id: 1,
    img: {
      src: iconPersonalFinances,
      alt: "icon personal finances",
    },
    title: "Personal Finances",
    body: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
  },
  {
    id: 2,
    img: {
      src: iconBankingAndCoverage,
      alt: "icon banking and coverage",
    },
    title: "Banking & Coverage",
    body: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    id: 3,
    img: {
      src: iconConsumerPayments,
      alt: "icon consumer payments",
    },
    title: "Consumer Payments",
    body: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];
