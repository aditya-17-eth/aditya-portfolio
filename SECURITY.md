# Reporting a security issue

Send suspected vulnerabilities privately to **adityasisodiya56412@gmail.com**.
Include the affected component, reproduction steps, and potential impact.

Please avoid putting exploit details or private information in public issues
before the issue has been reviewed. Do not include live credentials or wallet keys
in a report.

Reports for this portfolio should concern this repository. Linked projects and
embedded services are separate applications with their own maintainers and scope.

## Dependency status — October 19, 2026

After updating Next.js to 16.4.2, sharp to 0.35.5, and source-map-js to 1.2.2,
`npm audit --omit=dev` reports no known production dependency vulnerabilities.

The full audit still flags five development dependency entries from one
underlying [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm),
through the Next.js ESLint plugin's glob-matching dependencies. No patched braces
release is available at the time of this check. These dependencies are part of
the lint toolchain, not the production dependency tree. Review dependency updates
as a compatible fix becomes available; do not apply npm's proposed framework
lint-configuration downgrade without checking compatibility.
