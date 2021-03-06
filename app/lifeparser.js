/**
 * @license
 * Copyright (c) 2016 The {life-parser} Project Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://100dayproject.github.io/LICENSE.txt
 * The complete set of authors may be found at http://100dayproject.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://100dayproject.github.io/CONTRIBUTORS.txt
 * Code distributed by 100dayproject as part of the life.
 */

"use strict";

require("../config/init")();
global.__ = require("../libs/global_function");
global.__conig = require("../config");
global.__models = require("../libs/models_manager");
global.__viewRender = require("../libs/render_manager");
global.__redis = require('redis').createClient(__config.redis.auth);

/**
 * lifeparser main application
 */
class lifeparser {

    /**
     * Running application.
     * @param port [Int] - Port express listen
     * @param opt [Boolean] - Application show configuration
     */
    start(port, opt) {
        let app = require("../config/express")();
        let PORT = process.env.PORT || port || __config.site.port;
        app.listen(PORT);
        if (opt && opt.showConfigure) {
            __.logger.info(`Application config information:
            => Template engine: ${__config.site.templateEngine}
            => Model database: ${__config.db.dialect}
            => Theme current: ${__config.site.theme.name}\n`);

            __.logger.info(`=> Listening on port ${PORT}. Process ID: ${process.pid}`);
        }
    }
}

module.exports = lifeparser;