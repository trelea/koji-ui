import { DateBirthForm, HashnameForm } from "../forms";
import { ThumbForm } from "../forms/thumb";
import { SetupStepType } from "../types";

export const steps: SetupStepType[] = [
  {
    step: 1,
    title: "Upload Your Profile Picture",
    description:
      "Let's personalize your profile with a photo. Choose a clear picture of yourself.",
    footer: (
      <p className="text-sm text-muted-foreground">
        You can change this later in settings.
      </p>
    ),
    form: ({ next }) => <ThumbForm onSubmitCallback={next} />,
  },
  {
    step: 2,
    title: "Create Your Unique Hashname",
    description:
      "Pick a unique username. This is how other users will recognize you.",
    footer: (
      <p className="text-sm text-muted-foreground">
        Only letters, numbers, and underscores are allowed.
      </p>
    ),
    form: ({ next, prev }) => (
      <HashnameForm onSubmitCallback={next} prev={prev} />
    ),
  },
  {
    step: 3,
    title: "Set Your Date of Birth",
    description:
      "Tell us your birthday. This helps us personalize your experience.",
    footer: (
      <p className="text-sm text-muted-foreground">
        Don't worry, your birthday won't be public.
      </p>
    ),
    form: ({ next, prev }) => (
      <DateBirthForm onSubmitCallback={next} prev={prev} />
    ),
  },
  // {
  //   step: 4,
  //   title: "Write a Bio and Description",
  //   description:
  //     "Tell us a little about yourself. This helps others know who you are.",
  //   footer: (
  //     <p className="text-sm text-muted-foreground">
  //       You can keep it short and sweet, or tell your full story.
  //     </p>
  //   ),
  // },
];
