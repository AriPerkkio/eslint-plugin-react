## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Portrait" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `paulgaumer/care_before_the_call/src/components/Behind-campaign/portrait.js`
- [Link](https://github.com/paulgaumer/care_before_the_call/blob/HEAD/src/components/Behind-campaign/portrait.js#L28-L45)
```js
          <p className={`${styles.description} bio-description-fontsize`}>
            <FormattedMessage
              id={`behindCampaign.portraits.${character}.description`}
              // --- Display part or full bio based on length ---
              children={description => {
                return description.length > maxCharacters ? (
                  <span>
                    {description.slice(0, maxCharacters)}...
                    <span
                      className={`${styles.modalTrigger} extra-bold`}
                      onClick={handleShow}
                      onKeyDown={handleShow}
                      role="button"
                      tabIndex={0}
                    >
                      Read More
                    </span>
                  </span>
                ) : (
                  <span>{description}</span>
                );
              }}
              // -----
            />
          </p>
        </div>
      </div>
```
