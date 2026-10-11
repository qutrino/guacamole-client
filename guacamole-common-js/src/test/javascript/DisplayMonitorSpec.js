/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global Guacamole, expect */

describe('Guacamole.Display monitor dimensions', function DisplayMonitorSpec() {

    var display;

    beforeEach(function createDisplay() {
        display = new Guacamole.Display();
    });


    it('preserves offscreen buffer dimensions',
        function resizeBuffer(done) {
        var buffer = display.createBuffer();
        display.setMonitorSize(800, 600);
        display.resize(buffer, 2048, 1536);
        display.flush(function bufferResized() {
            expect(buffer.width).toBe(2048);
            expect(buffer.height).toBe(1536);
            done();
        });
    });

    it('preserves visible child layer dimensions',
        function resizeChildLayer(done) {
        var layer = display.createLayer();
        display.setMonitorSize(800, 600);
        display.resize(layer, 32, 32);
        display.flush(function childLayerResized() {
            expect(layer.width).toBe(32);
            expect(layer.height).toBe(32);
            done();
        });
    });


});
