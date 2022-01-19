/*
 *  Copyright (c) 2022 GrowStocks
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

interface ConfigProps {
    header?: string | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    breakpoint?: string | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
}

/**
 * Standard GSHeader component namespace.
 */
export class GSHeader {

    /**
     * Static function for observing a scrollable header.
     */
    static watch(config?: ConfigProps): void {

        const _initConfig: ConfigProps = {
            header: '.gs-header--scrolled',
            breakpoint: '.gs-hero'
        }

        const _mergedConfig: ConfigProps = {
            ..._initConfig,
            ...config
        };

        if (_mergedConfig.header || _mergedConfig.breakpoint) {
            const header: any = _mergedConfig.header;
            const breakpoint: any = _mergedConfig.breakpoint;

            const headerElement: any = document.querySelector(header);
            const breakingPointElement: any = document.querySelector(breakpoint);

            const options: Record<string, string | number | any> = {
                rootMargin: '-100px 0px 0px 0px',
            }

            const observer: any = new IntersectionObserver(function (entries: IntersectionObserverEntry[]) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        headerElement?.classList.add('scrolled');
                    } else {
                        headerElement?.classList.remove('scrolled');
                    }
                });
            }, options);

            observer.observe(breakingPointElement);
        }
    }
}