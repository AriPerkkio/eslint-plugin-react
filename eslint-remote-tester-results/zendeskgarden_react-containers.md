## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Hook" or memoize it.`
- Path: `zendeskgarden/react-containers/packages/schedule/schedule.stories.tsx`
- [Link](https://github.com/zendeskgarden/react-containers/blob/HEAD/packages/schedule/schedule.stories.tsx#L36-L52)
```tsx
  </ScheduleContainer>
);

export const Hook = () => {
  const Animation = () => {
    const duration = number('duration', 1250);
    const loop = boolean('loop', true);
    const delayMS = number('delayMS', 750);
    const { elapsed, delayComplete } = useSchedule({ duration, loop, delayMS });

    if (!delayComplete && delayMS !== 0) {
      return <div>Delay...</div>;
    }

    return (
      <div>
        Percentage: {(elapsed * 100).toFixed(0)}%<br />
        Elapsed: {elapsed}
      </div>
    );
  };

  return <Animation />;
};

Container.storyName = 'ScheduleContainer';
```
