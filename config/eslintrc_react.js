// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    'plugins': [
        'react'
    ],

    'settings': {
        'react': {
            'version': '15.0', // used for 'no-deprecated' rule.
        }
    },

    // ESLint-plugin-React
    // https://github.com/yannickcr/eslint-plugin-react
    'rules': {
        'react/display-name': 0, // Auto covered by jsx transformer.
        'react/forbid-component-props': 1,
        'react/forbid-prop-types': 0,
        'react/no-children-prop': 2, // children should be nested between the opening and closing tags.
        'react/no-danger': 2,
        'react/no-danger-with-children': 2,
        'react/no-did-mount-set-state': [1, 'disallow-in-func'],
        'react/no-did-update-set-state': [1, 'disallow-in-func'],
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2, // Disallow to use `ReactDOM.findDOMNode()`.
        'react/no-multi-comp': 0, // Enable to define a multiple component to a single file.
        'react/no-set-state': 1, // Recommend to use props instead of `setState()`.
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': [0, { // XXX: Disable to avoid mis-detection
            'customValidators': [],
            'skipShapeProps': false,
        }],
        'react/no-deprecated': 2, // Detect deprected styles
        'react/no-is-mounted': 2,
        'react/no-render-return-value': 2,
        'react/no-string-refs': 2,
        'react/no-unescaped-entities': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': [1, {
            'ignorePureComponents': false, // we'll reconsider this option when we begin to use `PureComponent`.
        }],
        'react/prop-types': [1, {
            'skipUndeclared': false,
        }],
        'react/react-in-jsx-scope': 1,
        'react/require-optimization': [0, {
            'allowDecorators': []
        }],
        'react/self-closing-comp': [2, {
            'component': true,
            'html': false,
        }],
        'react/require-render-return': 2,

        // We define customized rules because we thought default settings mixes with
        // component's arguments and lifecycle methods.
        'react/sort-comp': [1, {
            'order': [
                'constructor',
                'metadata',
                'rendering',
                'lifecycle',
                'everything-else'
            ],
            'groups': {
                'metadata': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext'
                ],
                'rendering': [
                    'type-annotations',
                    'render',
                    '/^render.+$/'
                ]
            }
        }],
        'react/sort-prop-types': [0, { // we cannot force alphabetical order to our old codebase.
            'callbacksLast': true,
            'requiredFirst': true,
        }],
        'react/style-prop-object': 2,

        // JSX-specific rules
        'react/jsx-boolean-value': [2, 'always'], // Enforce to specify html's boolean type attribute.
        'react/jsx-closing-bracket-location': 0, // It doesn’t matter.
        'react/jsx-curly-spacing': 1,
        'react/jsx-first-prop-new-line': [1, 'never'],
        'react/jsx-filename-extension': [2, {
            'extensions': ['.jsx']
        }],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'on', // There is no event handler which is diffrent from this rules (`onBarFoo`).
            'eventHandlerPropPrefix': 'on',
        }],
        'react/jsx-indent-props': 0, // we cannot force alphabetical order to our old codebase, and this is not any serious problem.
        'react/jsx-indent': [1, 4], // Sort with core's `indent` rule.
        'react/jsx-key': 1,
        'react/jsx-max-props-per-line': 0, // we don't think this is serious problem.
        'react/jsx-no-bind': [2, { // Sort to bind with this in constructor.
            'ignoreRefs': true, // we may use `refs`.
            'allowArrowFunctions': false,
            'allowBind': false,
        }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 1,
        'react/jsx-no-target-blank': 1, // see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': [2, {
            'allowAllCaps': false,
            'ignore': [],
        }],
        'react/jsx-sort-props': 0, // we cannot force alphabetical order to our old codebase, and this is meaningless.
        'react/jsx-space-before-closing': 0, // We don't this is a serious problem.
        'react/jsx-tag-spacing': [1, {
            'closingSlash': 'never',
            'beforeSelfClosing': 'allow', // Allow to write more XML-ly
            'afterOpening': 'never',
        }],
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-wrap-multilines': 2,
    }
};
