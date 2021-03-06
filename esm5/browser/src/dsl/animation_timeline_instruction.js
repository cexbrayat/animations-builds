/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AnimationTimelineInstruction() { }
/** @type {?} */
AnimationTimelineInstruction.prototype.element;
/** @type {?} */
AnimationTimelineInstruction.prototype.keyframes;
/** @type {?} */
AnimationTimelineInstruction.prototype.preStyleProps;
/** @type {?} */
AnimationTimelineInstruction.prototype.postStyleProps;
/** @type {?} */
AnimationTimelineInstruction.prototype.duration;
/** @type {?} */
AnimationTimelineInstruction.prototype.delay;
/** @type {?} */
AnimationTimelineInstruction.prototype.totalTime;
/** @type {?} */
AnimationTimelineInstruction.prototype.easing;
/** @type {?|undefined} */
AnimationTimelineInstruction.prototype.stretchStartingKeyframe;
/** @type {?} */
AnimationTimelineInstruction.prototype.subTimeline;
/**
 * @param {?} element
 * @param {?} keyframes
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?} duration
 * @param {?} delay
 * @param {?=} easing
 * @param {?=} subTimeline
 * @return {?}
 */
export function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing, subTimeline) {
    if (easing === void 0) { easing = null; }
    if (subTimeline === void 0) { subTimeline = false; }
    return {
        type: 1 /* TimelineAnimation */,
        element: element,
        keyframes: keyframes,
        preStyleProps: preStyleProps,
        postStyleProps: postStyleProps,
        duration: duration,
        delay: delay,
        totalTime: duration + delay, easing: easing, subTimeline: subTimeline
    };
}
//# sourceMappingURL=animation_timeline_instruction.js.map