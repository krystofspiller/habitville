# Conventions

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [Conventions](#conventions)
  - [\_internalFunctions](#_internalfunctions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## \_internalFunctions

Underscore `_` is used for functions that are considered internal, such as helper functions, and aren't meant to be used directly. Usually such functions don't have to be exported and don't pose a problem but in some cases they are for example used in tests and therefore exported and potentially available in the rest of the app.
