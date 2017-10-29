Run using npm start.

There are two branches, function-externals which uses a function to specify externals and object-externals which uses an object to specify externals.

The expected behavior is getting a valid bundle that when run via node will complain about not knowing what a Worker is, and rightfully so because they don't exist in node.

The observed behavior is a string of loader errors as the `worker-loader` is trying to resolve all of the dependencies of `sqlite3`, even though it should be ignoring sqlite3 and leaving behind an unaltered `require` call so that node can handle loading those dependencies.
